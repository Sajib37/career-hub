const getStoredApplication = () => {
    const storedApplication = localStorage.getItem('job-application');
    if (storedApplication) {
        return JSON.parse(storedApplication);
    }
    else {
        return [];
    }
}

const setStoredApplication = (id) => {
    const storedApplication = getStoredApplication();
    const isExist = storedApplication.find(jobID => jobID == id);
    if (!isExist) {
        storedApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplication));
    }
}

export{setStoredApplication,getStoredApplication}