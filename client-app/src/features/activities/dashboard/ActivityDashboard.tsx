import { observer } from 'mobx-react-lite';
import { Grid, List } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetail from './details/ActivityDetails';


export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;
    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    <ActivityList/>
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetail />}
                {editMode &&
                    <ActivityForm></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
})