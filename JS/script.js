// Javascript Dom File

// Triangle Card

function triangle() {

    const bTriangle = document.getElementById('b-triangle');
    const hTriangle = document.getElementById('h-triangle');

    const bTValue = bTriangle.value;
    const hTValue = hTriangle.value;
    const tResult = 0.5 * parseFloat(bTValue)  *  parseFloat(hTValue) ;
    console.log('Area = ',tResult)
}