const t1 = document.getElementById('2-l')
const t2 = document.getElementById('4-l')
const t3 = document.getElementById('6-l')
const t4 = document.getElementById('8-l')
const t5 = document.getElementById('10-l')


setTimeout(() => {
    t1.click();

    setTimeout(() => {
        t2.click();

        setTimeout(() => {
            t3.click();

            setTimeout(() => {
                t4.click();

                setTimeout(() => {
                    t5.click();

                    setTimeout(() => {
                        t1.click();
                    
                        setTimeout(() => {
                            t2.click();
                    
                            setTimeout(() => {
                                t3.click();
                    
                                setTimeout(() => {
                                    t4.click();
                    
                                    setTimeout(() => {
                                        t5.click()
                                    }, 1000);
                    
                                }, 1000);
                                
                            }, 1000);
                            
                        }, 1000);
                    
                    }, 1000);
                }, 1000);

            }, 1000);

        }, 1000);
        
    }, 1000);

}, 1000);
