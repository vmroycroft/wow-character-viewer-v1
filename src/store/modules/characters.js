import axios from 'axios';
import accountProfileRequest from '../requests/account-profile';
import equipmentRequest from '../requests/equipment';
import profileRequest from '../requests/profile';
import mediaRequest from '../requests/media';
import reputationsRequest from '../requests/reputations';

const state = {
	user: {},
	characters: []
};

const getters = {
	user: state => state.user,
	characters: state => state.characters
};

const actions = {
	/**
	 * Gets character data.
	 *
	 * @param {object} obj Vuex params
	 */
	async fetchCharacters({ commit }) {
		const accountProfileResponse = await accountProfileRequest();
		const accountProfileData = accountProfileResponse.data.data;
		if (accountProfileData.accountProfile) commit('setAccountProfile', accountProfileData.accountProfile);

		let requests = [];
		state.characters.forEach(c => {
			requests.push(profileRequest(c));
			requests.push(mediaRequest(c));
			requests.push(equipmentRequest(c));
			requests.push(reputationsRequest(c));
		});

		try {
			axios.all(requests).then(responses => {
				responses.forEach(response => {
					const data = response.data.data;

					if (data.characterProfile) commit('setProfile', data.characterProfile);
					else if (data.characterMedia) commit('setMedia', data.characterMedia);
					else if (data.characterEquipment) commit('setEquipment', data.characterEquipment);
					else if (data.characterReputations) commit('setReputations', data.characterReputations);
				});
			});
		} catch (err) {
			// console.log(err);
		}
	},

	logout() {
		axios({
			method: 'get',
			url: process.env.VUE_APP_LOGOUT_URL,
			withCredentials: true
		});
	}
};

const mutations = {
	setAccountProfile: (state, accountProfile) => {
		// TODO allow for multiple accounts
		state.characters = accountProfile.wow_accounts[0].characters.map(c => {
			return {
				name: c.name,
				realm: c.realm.slug,
				level: 0,
				averageItemLevel: 0,
				avatarUrl: '',
				equipped: [],
				reputations: []
			};
		});
		state.user.battletag = accountProfile.battletag;
	},

	setProfile: (state, profile) => {
		let character = state.characters.find(({ name }) => name === profile.name);
		character.level = profile.level;
		character.averageItemLevel = profile.average_item_level;
	},

	setMedia: (state, media) => {
		let character = state.characters.find(({ name }) => name === media.character.name);
		character.avatarUrl = media.avatar_url;
	},

	setEquipment: (state, equipment) => {
		let character = state.characters.find(({ name }) => name === equipment.character.name);
		character.equipped = equipment.equipped_items;
	},

	/**
	 * Only show reputation for the following factions:
	 *
	 * Neutral factions:
	 *   2164 - Champions of Azeroth
	 *   2163 - Tortollan Seekers
	 *   2391 - Rustbolt Resistance
	 *   2415 - Rajani
	 *   2417 - Uldum Accord
	 *
	 * Horde factions:
	 *   2103 - Zandalari Empire
	 *   2156 -Talanji's Expedition
	 *   2158 - Voldunai
	 *   2157 - The Honorbound
	 *   2373 - The Unshackled
	 */
	setReputations: (state, reputations) => {
		let character = state.characters.find(({ name }) => name === reputations.character.name);
		character.reputations = reputations.reputations.filter(r => [2164, 2163, 2391, 2415, 2417, 2103, 2156, 2158, 2157, 2373].includes(r.faction.id));
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
