import { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
import { PageHead } from "components/page-head"
import { SupporterProfile } from "components/supporter-profile"
import { SupportersList } from "components/supporters-list"

const Organization = () => {
  return (
    <Fragment>
      <PageHead pageTitle={"Spolek"} />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>
          <h1>Vedneměsíčník, z. s.</h1>
          <p>
            Spolek Vedneměsíčník, který vznikl v říjnu roku 2010, své cíle realizuje především publikováním časopisu
            Vedneměsíčník, který vychází v množství nejvýše čtyř čísel za rok, každé v nákladu cca 500 výtisků. Tento
            časopis je distribuován zdarma zejména v Literární kavárně Měsíc ve dne, na českobudějovických středních
            školách, v klubech, čajovnách a v kině Kotva. Každé číslo je pak archivováno v Jihočeské vědecké knihovně v
            oddělení regionálního tisku. Mezi doplňkové aktivity spolku patří organizování různých společenských a
            kulturních akcí pro středoškolské studenty (literárních večerů a autorských čtení).
          </p>
          <p>Vedneměsíčník vychází za laskavé podpory:</p>

          <SupportersList>
            <SupporterProfile
              name={"Literární kavárna Měsíc ve dne"}
              url={"http://www.mesicvedne.cz/"}
              logo={"/supporters/mesic-ve-dne.png"}
            />
            <SupporterProfile
              name={"Biskupské gymnázium J. N. Neumanna v Č. Budějovicích"}
              url={"http://www.bigy-cb.cz/bigy/"}
              logo={"/supporters/bigy.png"}
            />
            <SupporterProfile
              name={"Fokus České Budějovice"}
              url={"http://www.fokus-cb.cz/"}
              logo={"/supporters/focus.png"}
            />
          </SupportersList>
        </PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Organization
