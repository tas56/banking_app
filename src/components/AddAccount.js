import {useState} from 'react'

const AddTask = (props) => {

    const [name, setName] = useState('')
    const [deposit, setDeposit] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert('Please add a name')
            return
        }

        props.addAccount({name,deposit})

        setName('')
        setDeposit('')
    }

    return (
        <div className="card bg-light mt-2 mb-4">
            <div className="card-body">
                <form className={''} onSubmit={onSubmit}>

                    <div className={'form-group'}>
                        <label>Account Name</label>
                        <input type={'text'}
                               placeholder={'Add Task'}
                               value={name}
                               className={'form-control'}
                               onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={'form-group'}>
                        <label>Deposit</label>
                        <input type={'text'}
                               placeholder={'Add Description'}
                               value={deposit}
                               className={'form-control'}
                               onChange={(e) => setDeposit(e.target.value)} />
                    </div>


                    <input className={'btn btn-primary float-right'} type={'submit'} value={'Save Account'} />
                </form>
            </div>
        </div>
    )
}

export default AddTask;