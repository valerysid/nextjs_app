import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useState } from 'react';

export default function Maps({ locaties }) {

    const googlemap = useRef(null);
    const [locationsOnMap, setLocationsOnMap] = useState();

    useEffect(() => {
        if (!locaties) return;
        if (!locaties.length > 0) return;

        setLocationsOnMap(locaties?.map(locatie => {
            if (locatie?.lat) return (
                {
                    position: {
                        lat: locatie?.lat,
                        lng: locatie?.lng
                    },
                    title: 'hoofdbureau',
                }
            )
        }))
    }, [locaties])



    useEffect(() => {

        function addMarkersToMap(map, infoWindow) {
            locationsOnMap?.forEach((locationData, i) => {
                createMarker(map, 'red', locationData, infoWindow)
            });
        }

        function centerMap(map) {

            // Create map boundaries from all map markers.
            var bounds = new google.maps.LatLngBounds();
            map?.markers?.forEach(function (marker) {
                bounds.extend({
                    lat: marker.position.lat(),
                    lng: marker.position.lng()
                });
            });

            // Case: Single marker.
            if (map?.markers?.length == 1) {
                map?.setCenter(bounds.getCenter());

                // Case: Multiple markers.
            } else {
                map?.fitBounds(bounds);
            }
        }

        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
            version: 'weekly',
        });

        loader.load().then(() => {

            const infoWindow = new google.maps.InfoWindow();

            const newMap = new google.maps.Map(googlemap.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 13,
                fullscreenControl: false, // remove the top-right button
                mapTypeControl: false, // remove the top-left buttons
                streetViewControl: false, // remove the pegman
                zoomControl: true, // remove the bottom-right buttons
                styles: mapOptions,
            });
            newMap.markers = []

            addMarkersToMap(newMap, infoWindow);
            centerMap(newMap)
        })
    }, [locationsOnMap])

    return (
        <div className="rounded-[24px] mt-8 border border-black  overflow-hidden ">
            <div className='rounded-2xl w-full h-[500px] lg:h-[700px]' id="map" ref={googlemap} />
        </div>
    );


}

function createMarker(map, color, locationData, infoWindow) {
    if (!locationData) return;
    const marker = new google.maps.Marker({
        position: locationData.position,
        map,
        title: `${locationData.title}`,
        optimized: false,
    });

    const content = `<h2 style="color:green;font-size:14px; font-weight:700;">${locationData.title}</h2>`;
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(content);
        infoWindow.open(marker.getMap(), marker);
    });
    map.markers.push(marker)
}

const mapOptions = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#02c599"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#faf4f4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#181414"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#890c0c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d2d2d2"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2a2929"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffd329"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#6745c8"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d0d0d0"
            }
        ]
    }
]