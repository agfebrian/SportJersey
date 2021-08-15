import axios from 'axios'

const leagues = () => {
    return axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => {
            if (res.data.leagues) {
                const filterLeagues = res.data.leagues.filter(item => item.strSport === 'Soccer')
                const getOnlyTeenLeagues = filterLeagues.slice(0, 10)
                return Promise.resolve(getOnlyTeenLeagues)
            }
            return Promise.reject('Data not found')
        })
}

export default leagues;