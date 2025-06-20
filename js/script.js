  const cardBtn = document.querySelector('.card-btn');
  const breadcrumbs = document.querySelector('.breadcrumbs');
  const tabButtons = document.querySelectorAll('.tab-btn');

  const step1 = document.querySelector('.step-1');
  const step2 = document.querySelector('.step-2');

  cardBtn.addEventListener('click', () => {
    // Hide Step 1, Show Step 2
    step1.style.display = 'none';
    step2.style.display = 'block';

    // Remove existing breadcrumbs-active
    const existingActive = breadcrumbs.querySelector('.breadcrumbs-active');
    if (existingActive) {
      existingActive.remove();
    }

    // Select default tab button (first one)
    const defaultTab = tabButtons[0]; // or any logic you prefer
    const newBreadcrumb = document.createElement('li');
    newBreadcrumb.classList.add('breadcrumbs-active');
    newBreadcrumb.textContent = defaultTab.textContent;
    breadcrumbs.appendChild(newBreadcrumb);
  });

  // Update breadcrumb when tab is clicked
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const activeBreadcrumb = breadcrumbs.querySelector('.breadcrumbs-active');
      if (activeBreadcrumb) {
        activeBreadcrumb.textContent = button.textContent;
      }
    });
  });


// Tabs
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    // Remove active and animation classes
    document.querySelectorAll('.tab-btn').forEach(btn =>
      btn.classList.remove('active')
    );
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('show', 'fade-in');
    });

    // Activate the clicked button
    button.classList.add('active');

    // Show and fade in the selected pane
    const activePane = document.getElementById(tabId);
    activePane.classList.add('show');
    requestAnimationFrame(() => {
      activePane.classList.add('fade-in');
    });
  });
});