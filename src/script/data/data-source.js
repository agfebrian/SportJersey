import axios from 'axios'

class DataSource {
    static getJersey(idLeague) {
        return axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`)
            .then(res => {
                if (res.data.teams != 'Invalid League ID passed') {
                    return Promise.resolve(res.data.teams)
                } else {
                    return Promise.reject('Data not found')
                }
            })
    }

    static searchJersey(keyword) {
        return axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            .then(res => {
                if (res.data.teams) {
                    return Promise.resolve(res.data.teams)
                } else {
                    return Promise.reject('Data not found')
                }
            })
    }
}

export default DataSource