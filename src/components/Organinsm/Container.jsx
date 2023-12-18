const Container = ({ children }) => {
  return (
    <main className='antialiased w-full flex flex-col justify-between bg-lightPink'>
      {children}
    </main>
  )
}

export default Container;