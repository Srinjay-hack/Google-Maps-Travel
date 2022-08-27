import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw,ne) => {
    try{
        //request
        const {data:{data}} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'd74ea505afmsh0676b63ad562da0p1968ffjsnd05c0d2baef7',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }
    catch(error){
        console.log(error);
    }
}