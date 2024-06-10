import type { Place } from './Place';

export default async function search(term: string) {
    let rslt: Response | null = null;
    const site =
        'https://nominatim.openstreetmap.org/search?' +
        `q=${term}&format=geojson&addressdetails=1` +
        '&layer=address&limit=5';
    try {
        console.log('about to fetch ', site);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = {
            headers,
        };
        rslt = await fetch(site, options);
        const data = await rslt.json();
        console.log(data);
    } catch (e) {
        console.log('error thrown: ', e);
        console.log(rslt);
    }
    return {
        hello: true,
    };
}
