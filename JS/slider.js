let zoneSlider = document.getElementById('zoneSlider');
let bulletpointList = document.getElementById('bulletpointList');
let position = 0;
bulletpointList.children[position].classList.add('selected');

zoneSlider.addEventListener('click', onSliderClick);
bulletpointList.addEventListener('click', onBulletpointClick)

function onSliderClick(event) {
    if (!event.target.closest('.review')) {
        return;
    }

    lastPosition = position;
    ++position;

    if (position == 3) {
        position = 0;
    }

    scrollSlider(position);
    toggleSelected(lastPosition, position);
}

function onBulletpointClick(event) {
    if (!event.target.closest('.bulletpoint')) {
        return;
    }

    lastPosition = position;
    position = Array.from(bulletpointList.children).indexOf(event.target);

    scrollSlider(position);
    toggleSelected(lastPosition, position);
}

function scrollSlider(position) {
    zoneSlider.style.marginLeft = -position * 860 + 'px';
}

function toggleSelected(lastPosition, position) {
    bulletpointList.children[lastPosition].classList.remove('selected');
    bulletpointList.children[position].classList.add('selected');
}