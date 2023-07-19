interface Props {
  children: React.ReactNode;
}

export const DarkLayout: React.FC<Props>= ({ children }) => {
  return (
    <div style={{
      backgroundColor:'rgba(25, 150, 143, 0.377)',
      padding:'5px',
      borderRadius:'10px'
    }}>
      <h3>Dark-layout</h3>
      {children}
    </div>
  );
};
