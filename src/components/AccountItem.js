import {FaArrowRight, FaEdit, FaMinus, FaPlus, FaTimes} from "react-icons/all";
import AddBalance from "./AddBalance";
import {Link} from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {deleteAccount} from "../actions/accountActions";

const AccountItem = (props) => {

    const [expand, setExpand] = useState(false)


    return (
        <div className="row d-flex">
            <div className={"col-md-3"}>
                <div className="card m-2">
                    <div className="card-body">
                        <div className={"float-right"}>
                            <FaEdit
                                className="edit"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Edit account"/>
                            <FaTimes
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Delete account"
                                className="delete ml-2"
                                onClick={() => {
                                    // eslint-disable-next-line no-restricted-globals
                                    let c = confirm('Would you like to permanently delete this account?');
                                    if (c === true)
                                        props.deleteAccount(props.account.id)
                                }}
                            />
                        </div>
                        <h5 className="card-title">Account Name: {props.account.name}</h5>
                        <p className="card-text">Balance: ${props.account.balance}</p>
                        <p onClick={() => setExpand(!expand)}
                           style={{cursor: 'pointer'}}> Deposit
                            {expand ? <FaMinus data-toggle="tooltip"
                                                      data-placement="bottom"
                                                      title="collapse"
                                                      className="ml-2"/>
                                : <FaPlus data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="add task"
                                          className="ml-2"/>}
                        </p>
                        {expand && <AddBalance/>}
                        <Link className={"card-link"}
                              to="./VariableAccount">
                            View Account <FaArrowRight/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect(null, { deleteAccount })(AccountItem);