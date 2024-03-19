const TabContent = ({ title, content }) => (
  <div className="tabcontent">
    <h3>{title}</h3>
    <a href="{content}" />
  </div>
);
export default TabContent;
