import axios from "axios";

/**
 * Returns a Promise generated by an axios post request.
 *
 * @param {object} character Character to get reputations data for
 * @param {string} character.realm Character realm
 * @param {string} character.name Character name
 * @return {Promise}
 */
export default function reputationsRequest(character) {
  return axios({
    method: "post",
    url: process.env.VUE_APP_WOWQL_URL,
    withCredentials: true,
    data: {
      query: `{
				characterReputations(realm: "${character.realm}", name: "${character.name}") {
					character {
						name
          }
          reputations {
            faction {
              id
              name
            }
            standing {
              value
              max
              name
            }
          }
				}
			}`
    }
  });
}
