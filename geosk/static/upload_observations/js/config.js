/**
 *  config file for get-it starterkit upload_observations
 *  author: Paolo Tagliolato - CNR IREA in Milano - www.irea.cnr.it
 *            paolo.tagliolato@gmail.com
 *  created on on 11/05/15.
 *
 */
var baseurl_sp7="http://sp7.irea.cnr.it",
    app_name="sensors",
    uri_sk="sk.test.irea.cnr.it";


var endpoint = "/observations/sos";
var geoserveruri="/geoserver/ows";

var documentUrl = document.URL;


var baseUrlSK="//"+window.location.host;

/**
 * @note uncomment the following lines for local tests
 */
//baseUrlSK="test";console.warn("file config.js is set for local tests, please comment this line for production");


console.log("loading whoami from: "+ baseUrlSK+"/whoami");
var whoami=JSON.parse($.ajax({
    type:"get",
    url: baseUrlSK+"/whoami",
    async:false,
    dataType: "application/json"
}).responseText);

//uri_sk= (whoami.uriSK) ? whoami.uriSK : whoami.uri.replace(/http[s]*:\/\//, "");
sk_domain_name=(whoami.sk_domain_name) ? whoami.sk_domain_name : whoami.uri.replace(/http[s]*:\/\//, "");
endpoint=(whoami.endpoint_SOS_url) ? whoami.endpoint_SOS_url : endpoint;
geoserveruri=whoami.uri?whoami.uri+"/geoserver/ows":geoserveruri;

console.log("uriSK : "+ uri_sk);
console.log("sk_domain_name"+sk_domain_name);






