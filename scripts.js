document.addEventListener("DOMContentLoaded", function() {
    const truck = document.getElementById('truck');
    const floatingShip = document.getElementById('floating-ship');
    const airplane = document.getElementById('airplane');
    const train = document.getElementById('train');

    function resetAnimation(element, animationName) {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    }

    function syncAnimations() {
        resetAnimation(truck, 'drive');
        resetAnimation(floatingShip, 'sail');
        resetAnimation(airplane, 'fly');
        resetAnimation(train, 'driveTrain');
    }

    syncAnimations();
});
