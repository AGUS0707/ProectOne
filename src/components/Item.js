import React from "react";

class Item extends React.Component {
   render() {
      return (
         <div className="card">
            <div className="card-header"><h3>Lorem ipsum dolor.</h3></div>
            <div className="card-body">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus deserunt illo illum impedit incidunt
               inventore ipsam itaque non officia, perspiciatis possimus quia reiciendis repellat saepe. Amet doloremque
               laborum maxime!
            </div>
            <div className="card-footer">
               <button type="button" className="btn btn-success">Click me!</button>
            </div>
         </div>
      )
   }
}
export default Item;