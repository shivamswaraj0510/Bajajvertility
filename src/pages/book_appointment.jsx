import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import Quickappointment from "../components/quickpappointmentImage/quickappointment";
import QuickAppointmentForm from "../components/appointment/appointment";

const Bookappointment = () => {
  return (
    <div>
      <Header />
      <Quickappointment />
      <QuickAppointmentForm />
      <Footer />
    </div>
  );
};

export default Bookappointment;
