/* This is a function that is getting the IP address of the user and displaying it on the page. */
let output = info => {
    
    if(info.ip){
        let section = document.createElement('section');

        let ipTitle = document.createElement('h3');
        ipTitle.textContent = "This is your IP Address:";

        let ipAddress = document.createElement('h4');
        ipAddress.textContent = info.ip

        section.appendChild(ipTitle);
        section.appendChild(ipAddress);

        if (info.city && info.country){
            let locationTitle = document.createElement('h3');
            locationTitle.textContent = "Here is where you are at:";

            let location = document.createElement('h4');
            location.textContent = `${info.city}, ${info.country}`

            section.appendChild(locationTitle);
            section.appendChild(location);
        }
        let replace = document.getElementById('replace')
        document.getElementById('info').replaceChild(section, replace)
    }

}

(async function getIPAddress () {
    const response = await fetch('https://ip-fast.com/api/ip/?format=json&location=True')
    data = await response.json()
    output(data)
})()