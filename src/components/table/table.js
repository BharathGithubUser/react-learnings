import React, {Component} from "react";
import TableCell from "./TableViewCell"
export default class Table extends Component {
    renderRow() {
        return (
            <TableCell style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <TableCell style={{ flex: 1, alignSelf: 'stretch' }} /> { /* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
                <TableCell style={{ flex: 1, alignSelf: 'stretch' }} />
                <TableCell style={{ flex: 1, alignSelf: 'stretch' }} />
                <TableCell style={{ flex: 1, alignSelf: 'stretch' }} />
                <TableCell style={{ flex: 1, alignSelf: 'stretch' }} />
            </TableCell>
        );
    }

    render() {
        const data = [1, 2, 3, 4, 5];
        return (
            <TableCell style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((datum) => { // This will render a row for each data element.
                    return this.renderRow();
                })
            }
            </TableCell>
        );
    }
}