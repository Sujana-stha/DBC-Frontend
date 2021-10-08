import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  MonthView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import {addMeetings, editMeetings, deleteMeetings, getMeetings, loggedUser} from 'auth/apiRoutes';
import {notify}  from 'react-notify-toast';


const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ partner: nextValue });
  };
  const onDescriptionChange = (newValue) => {
    onFieldChange({ descriptions: newValue });
  }
  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
        text="Meeting Description"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.descriptions}
        onValueChange={onDescriptionChange}
        placeholder="Short Description"
      />

      <AppointmentForm.Label
        text="Meeting With"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.partner}
        onValueChange={onCustomFieldChange}
        placeholder="Meeting partner name"
      />
    </AppointmentForm.BasicLayout>
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      authUsers: {},
      currentDate: "2021-06-1",
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }
  componentDidMount() {
    let authId = null
    loggedUser().then(response => {
      authId = response.data.id
      this.setState({
        authUsers: response.data
      })
    })
    getMeetings().then(response=> {
      const data = []
      response.data.map(resp => {
        if(resp.UsersId === authId ) {
          data.push(resp)
        }
      })
      this.setState({
        data: data
      })
    })
  }
  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    console.log('new', added);
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
    if(added) {
      addMeetings(added).then(response => {
        console.log(response);
        notify.show("Meeting added Successfully", "success", 5000)
      })
    }
    if(changed) {
      this.state.data.map(appointment => {
        if(changed[appointment.id]) {
          const id = appointment.id
          const values = changed[id]
          editMeetings(id, values).then(response => {
            console.log(response)
            notify.show("Meeting updated Successfully", "success", 5000)
          })
        }
      })
    }
    if(deleted) {
      deleteMeetings(deleted).then(response => {
        console.log(response)
        notify.show("Meeting deleted Successfully", "error", 5000)
      })
    }
  }

  render() {
    const {
      currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
    } = this.state;
    
    return (
      <Paper style={{width: "98%", margin: "20px 0"}}>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <MonthView/>
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm 
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
        </Scheduler>
      </Paper>
    );
  }
}