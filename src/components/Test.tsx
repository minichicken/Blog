import * as React from 'react';
import { AgeStore } from '../stores';
import { observer } from 'mobx-react';

@observer
class Test extends React.Component {

    public render() {
        return (
            <div>
                <h1>{AgeStore.getAge()}</h1>
                <button onClick={this.addAge}>age upper</button>
            </div>
        );
    }

    private addAge = () => {
        AgeStore.setAge(AgeStore.getAge() + 1);
    }
}

export default Test;
