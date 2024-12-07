function hours() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    const time = hour >= 12 ? 'PM' : 'AM'

    const hr = hour % 12 === 0 ? 12 : hour % 12;
    const clockTime = `${hr.toString().padStart( 2, '0')}:${minute.toString().padStart( 2, '0')}:
        ${seconds.toString().padStart( 2, '0')} : ${time}`;

        document.getElementById('time').textContent = clockTime;

}
setInterval(  hours, 1000)
hours();