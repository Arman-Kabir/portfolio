import './sectionHeader.css';

interface Title {
  title: string;
}

export function SectionHeader ({ title }: Title) {
  return (
    <div className='section_header'>
      <h1>{title}</h1>
    </div>
  )
}

// export default SectionHeader;