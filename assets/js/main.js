document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.card-content-notice-item');
    const btnSubmit = document.querySelector('.card-footer-submit');
    const cardHeader = document.querySelector('.card-header');
    const cardFooter = document.querySelector('.card-footer');
    const cardContent = document.querySelector('.card-content');
    const cardContentSuccess = document.querySelector('.card-content-success');
    const cardContentSuccessLabelText = document.querySelector('.card-content-success-label-text');

    let itemActive = null;
    let finishCard = false;

    const handleItemClick = (itemClick) => {
        if (itemClick && itemActive && itemActive !== itemClick) {
            itemActive.classList.remove('active');
        }

        itemClick.classList.toggle('active');

        itemActive = itemClick.classList.contains('active') ? itemClick : null

        btnSubmit.disabled = !itemActive;

        console.log(itemClick.innerHTML);
    }

    const handleSubmit = () => {
        finishCard = true;
        cardHeader.style.display = 'none';
        cardFooter.style.display = 'none';
        cardContent.style.display = 'none';
        cardContentSuccess.style.display = 'block';
        cardContentSuccessLabelText.innerText = `You selected ${itemActive.innerHTML} out of 5`;
    }

    items.forEach(item => {
        item.addEventListener('click', (e) => handleItemClick(item))
    })

    btnSubmit.disabled = true;

    btnSubmit.addEventListener('click', (e) => handleSubmit())
})