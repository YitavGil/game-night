import axios from "axios";
import {gameDetailsURL, gameScreenShotsURL} from '../API/api'

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: 'LOADING_DETAIL',
    })


    const detailData = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenShotsURL(id))
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        }
    });
};

