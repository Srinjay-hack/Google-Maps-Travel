import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from "@material-ui/core";
import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./style";

const Map = ({coords,setCoords,setBounds}) =>{
    const classes=useStyles();
    const isMobile=useMediaQuery('(min-with:600px)');

    return(
        <div className={classes.mapContainer} style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDEzKPbj_6zAg1LtJ99GIIcpqBz9gXYG9s' }}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true }}
            onChange={(e) => {
                setCoords({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
            onChildClick={''}>
            </GoogleMapReact>
        </div>
    )
}
export default Map;