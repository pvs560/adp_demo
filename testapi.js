const yelp = require('yelp-fusion');
const client = yelp.client('90UVSWVkKAqoYTzCcb1uthIw0bgoOiOeapso1V0YJcAgj52ZUBHVsjIlh_oax0j1dTKJ1QTkN0oBaSLSF5RHUnJGvaGcnn90fjC16lVs0p0IXfIPT5dgDbfRDX9mXXYx');

client.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca',
}).then(response => {
    console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
    console.log(e);
});