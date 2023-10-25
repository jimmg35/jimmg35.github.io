interface IContentSection {
  title: string
  icon: React.JSX.Element
  children: React.ReactNode
}

const ContentSection = ({ title, icon, children }: IContentSection) => {
  return <div>{children}</div>
}

export default ContentSection
