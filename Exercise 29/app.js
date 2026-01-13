async function studentData(){
    console.log("Xogta Ardayda");
    const xogAqriye = await fetch('./data.json');
    const xog = await xogAqriye.json();
    console.log("Xogta waa tan Mudane: ", xog)
}
studentData();