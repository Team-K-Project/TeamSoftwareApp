import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from 'react-router-dom';
import SimpleBreadcrumbs from './Breadcrumbs';
import ExplorePage from './ExplorePage'

interface Props {
    refetch: () => void
}
export default function Routes(props: Props) {
    return (
        <Router>
            <div>
                <Route path="/*" component={SimpleBreadcrumbs} />


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>


                    <Route
                        path="/"
                        exact
                        component={(props2: RouteComponentProps<{}>) => {
                            return <>
                                <ExplorePage history={props2.history} refetch={props.refetch} />
                            </>
                        }
                        }
                    />
                </Switch>
            </div>
        </Router >
    );
}