import React from 'react'
const Layout = ({children})=><div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-tasks"/> Gestión de productos</div>
                <div className="panel-body">
                    {children}
                </div>
                <div className="panel-footer">
                    © Rodrigo Spirolazzi
                </div>
            </div>
        </div>
    </div>
</div>

export default Layout