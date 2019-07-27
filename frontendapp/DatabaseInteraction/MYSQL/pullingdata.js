import connection from '../Connection';




//pull patients data
/*export function pullPatientData(name) {
    object = pullData(name);
    return JSON.stringify(object)
}

async function pullData(name) {
    const URL = "http://" + connection.connection + ":3005/select*from patients where name = \'" + name + '\'';
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  }*/

  export function pullPatientData(name) {
    const URL = "http://" + connection.connection + ":3005/select*from patients where name = \'" + name + '\'';
    return fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) =>{
        console.error(error);
        return;
      });
    }