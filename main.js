window.addEventListener('DOMContentLoaded', init);

function init() {

    throw new error('trying trackjs');
    
    if(window.onerror){
        var oldError = window.onerror;
        console.log(oldError.message);
    }

    class CustomError extends Error{
        constructor(message){
            super(message);
            this.name = 'CustomError';
        }
    }
    
    try{
        let body = document.querySelector('heae');
        body.remove();
        
    }
    catch(err){
        console.log(err.name)
        console.log(err.message);
        console.log(err.stack);
    }
    finally{
        console.log('Could not remove head node');
    }

    document.getElementById('consoleLog').addEventListener('click', event =>{
        console.log('testing');
    });

    document.getElementById('consoleError').addEventListener('click', event =>{
        console.error('Stop clicking me');

    });

    document.getElementById('consoleTable').addEventListener('click', event =>{
        console.table([
            {
                first: 'Gurpreet',
                last: 'Singh',
                age: 21,
            },
            {
                first: 'Thomas',
                last: 'Powell',
                age: 50,
            }
        ])
    });

    document.getElementById('consoleDir').addEventListener('click', event =>{
        console.dir(document.body);
    });

    document.getElementById('consoleDirXml').addEventListener('click', event =>{
        console.dirxml(document.body);
    });

    const label = 'Problems in life';

    document.getElementById('consoleGroupStart').addEventListener('click', event =>{
        console.group(label);
        console.info('Being on a diet');
        console.info('Trying to be good at school');
        console.info('Procastinating');
        console.info('Not procastinating');
        

    });

    document.getElementById('consoleGroupEnd').addEventListener('click', event =>{
        console.groupEnd(label);
    });

    const yourIt = 'Reaction Time';
    document.getElementById('startTimer').addEventListener('click', event =>{
        console.time(yourIt);
    });

    document.getElementById('endTimer').addEventListener('click', event =>{
        console.timeEnd(yourIt);
    });

    document.getElementById('consoleTrace').addEventListener('click', event =>{
        let chicken = () => { console.trace() };
        chicken();
    });

    document.getElementById('consoleWarn').addEventListener('click', event =>{
        console.warn('With great power comes great responsibility');
    });

    document.getElementById('consoleAlert').addEventListener('click', event =>{
        let x = 2;
        let y = 1 
        let logic = '2 + 1 == 21';
        console.assert(x + y == 21, {x, y, logic});
    });

    document.getElementById('consoleClear').addEventListener('click', event =>{
        console.clear();
    });

    const numOfCalls = '#Calls'
    document.getElementById('consoleCount').addEventListener('click', event =>{
        for(let i = 0; i < 5; ++i){
            console.count(numOfCalls);
        }
    });

    document.getElementById('globalError').addEventListener('click', event =>{
        throw new Error('GLOBAL ERROR ALERT');
    });


    try{
        throw new CustomError('finished the button part of lab');
    }
    catch(error){
        console.error(error.message);
        console.log('^ caught custom error');
    }

    


}