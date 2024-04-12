import GridBox from "../General/GridBox";
    import { eventDataList } from '../../Data/GeneralData';

export default function EventList() {
  return (
    <section className="blog pt-130 pb-130 event-list-margin">
      <div className="container">
        <div className="row  g-4 event-list-margin center-grid">
            {eventDataList.map((events) => (<GridBox key={events.key} {...events} />))}
        </div>
      </div>
    </section>
  );
}
