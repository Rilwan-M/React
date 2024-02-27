export default function TabButton({children,onSelect , selectedComponent}) {

  console.log("tabButton component executed")
  return <button className={selectedComponent ? "active" : null} onClick={onSelect}>{children}</button>;
}
