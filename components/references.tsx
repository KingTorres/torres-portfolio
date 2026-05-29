'use client'
import Styles from "@/src/css/references.module.css"

const copyNumber = async (value: any) => {
  try {
    await navigator.clipboard.writeText(value)
    alert('Contact Copied')
  } catch (err) {
    alert('Failed to copy:'+ err)
  }
}
const References = () => {
    return (
        <>
        <div className={Styles.sectionTitle}>Character References</div>
        <div className={Styles.referenceList}>
            <div className={Styles.listItem}>
                <div className={Styles.name}>Peter Ian Munsayac</div>
                <div className={Styles.position}>Manager</div>
                <div className={Styles.department}>Research and Development, Megabet</div>
                <div className={Styles.contact} onClick={() => copyNumber('09153120303')}>09153120303</div>
            </div>
            
            <div className={Styles.listItem}>
                <div className={Styles.name}>Gideon Bardellas</div>
                <div className={Styles.position}>Senior Backend Developer</div>
                <div className={Styles.department}>Research and Development, Megabet</div>
                <div className={Styles.contact} onClick={() => copyNumber('09693010206')}>09693010206</div>
            </div>
            <div className={Styles.listItem}>
                <div className={Styles.name}>Yra V. Sabordo</div>
                <div className={Styles.position}>HR Head</div>
                <div className={Styles.department}>Megabet</div>
                <div className={Styles.contact} onClick={() => copyNumber('09268741475')}>09268741475</div>
            </div>
        </div>
        </>
    )
}
export default References