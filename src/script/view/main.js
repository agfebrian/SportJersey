import $ from 'jquery'
import DataSource from '../data/data-source'
import leagues from '../data/leagues'
import '../component/app-bar.js'
import '@fortawesome/fontawesome-free/js/all.js'

const main = () => {
    const leagueListElement = $('.leagues')
    const jerseyListElement = $('.jersey')
    const btnSlideLeft = $('#slideLeft')
    const btnSlideRight = $('#slideRight')
    
    const leaguesList = async () => {
        try {
            const result = await leagues()
            renderLeagues(result)
        } catch (message) {
            return message
        }
    }

    const listJerseyByFilterLeague = async (idLeague) => {
        try {
            const result = await DataSource.getJersey(idLeague)
            renderJersey(result)
        } catch (message) {
            handleError(message)
        }
    }

    const listJerseyBySearchTeam = async (keyword) => {
        try {
            const result = await DataSource.searchJersey(keyword)
            renderJersey(result)
        } catch (message) {
            handleError(message)
        }
    }

    const handleError = message => {
        jerseyListElement.empty()
        jerseyListElement.append(`<h2 class="font-medium text-4xl mt-8>${message}<h2>`)
    }

    const slider = (status, slideTo) => {
        const statusSlide = status
        const slideToPoint = parseInt(slideTo)
        const currentPoint = parseInt(leagueListElement.scrollLeft())

        if (statusSlide == 'right') {
            leagueListElement.scrollLeft(currentPoint + slideToPoint)
        } else {
            leagueListElement.scrollLeft(currentPoint - slideToPoint)
        }
    }

    const renderLeagues = result => {
        result.forEach(element => {
            leagueListElement.append(`
                <div 
                    data="${element.idLeague}"
                    class="league-item shadow-lg flex-shrink-0 w-60 h-20 m-2 p-4 bg-white rounded-lg font-medium text-xl cursor-pointer">
                    ${element.strLeague}
                </div>
            `)
        })
    }

    const renderJersey = result => {
        jerseyListElement.empty()
        result.forEach(element => {
            jerseyListElement.append(`
                <div class="mt-4 p-4 bg-gray-200 rounded-lg shadow-lg h-auto">
                    <img class="h-44" src="${element.strTeamJersey}">
                    <h2 class="mt-4 font-bold text-2xl text-center">${element.strTeam}</h2>
                    <button class="w-full rounded-lg shadow-lg mt-4 py-2 bg-primary text-white font-medium text-md hover:bg-hover">BUY JERSEY</button>
                </div>
            `)
        })
    }
    
    leaguesList()
    
    $(document).on('click', '.league-item', (ev) => {
        const _target = ev.target
        const idLeague = _target.getAttribute('data')
        listJerseyByFilterLeague(idLeague)
    })

    $('#search-input').on('keyup', () => {
        const keyword = $('#search-input').val()
        listJerseyBySearchTeam(keyword)
    })

    btnSlideRight.on('click', () => {
        const status = btnSlideRight.attr('data-status')
        const slideTo = btnSlideRight.attr('data-slide')
        slider(status, slideTo)
    })

    btnSlideLeft.on('click', () => {
        const status = btnSlideLeft.attr('data-status')
        const slideTo = btnSlideLeft.attr('data-slide')
        slider(status, slideTo)
    })
    
    window.onload = () => listJerseyByFilterLeague(4328)
}

export default main