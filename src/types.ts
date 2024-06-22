import * as THREE from "three";


export type ThreeScene = {
    camera:     THREE.PerspectiveCamera;
    scene:      THREE.Scene;
    renderer:   THREE.WebGLRenderer;
}


export type BodyProperties = {
    // lifted from https://docs.astronomyapi.com/requests-and-response/body-properties
    date:   string;
    id:     string;             // Unique identifier for the body
    name:   string;             // User friendly name for the body
    distance: {
        fromEarth: {
            au: string;         // Distance from Earth in Astronomical units
            km: string;         // Distance from Earth in Kilometers
        };
    };
    position: {
        horizontal: {           // Position object in horizontal coordinates. Object will return the values in Altitude and Azimuth (Alt/Az) format. Numerical and literal values are returned.
            altitude: {
                degrees: string;
                string: string;
            };
            azimuth: {
                degrees: string;
                string: string;
            }
        };         
        equatorial: {           // Position object in equatorial coordinates. Object will return the values in Right Ascension and Declination (RA/Dec) format. Numerical and literal values are returned.
            rightAscension: {
                hours: string;
                string: string;
            };
            declination: {
                degrees: string;
                string: string;
            }
        };         
    };
    extraInfo: {                // Other information relating to the body
        elongation: string;     // Angular separation between the Sun and the planet, with Earth as the reference point
        magnitude: string;      // Apparent magnitude of the object
        phase?: {};             // Phase of the body as an angle and a fraction.
    };
};
