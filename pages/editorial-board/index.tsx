import React, { Fragment } from "react"
import { Page } from "components/page"
import { PageNavigation } from "components/page-navigation"
import { PageHeader } from "components/page-header"
import { PageFooter } from "components/page-footer"
import { PageContent } from "components/page-content"
import { PageHead } from "components/page-head"

const Organization = () => {
  return (
    <Fragment>
      <PageHead pageTitle={"Redakce"} />

      <Page>
        <PageHeader>
          <PageNavigation />
        </PageHeader>

        <PageContent>
          <h1>Tak to je naše redakce</h1>
          <p>Prosím, seznamte se. Je nás hodně.</p>
          <p>
            <strong>šéfredaktoři:</strong> Daniel Jež, Andrea Matejič, Lukáš Hypša
          </p>
          <p>
            <strong>redaktoři:</strong> Dominik Machula, Lydie Rosenkrancová, Henrietta Ottová, Anežka Klementová, Lia
            Křížová, Šárka Brunclíková, Aneta Klímová, Matyáš Melíšek, Markéta Srbová, IbalGin Toník, Kristýna Jandová,
            Jan Mojka, Natálie Malcová, Nikol Korytarová, Magdaléna Hanzalová
          </p>
          <p>
            <strong>vrchní poeta:</strong> David Nebor
          </p>
          <p>
            <strong>grafika:</strong> Libor Gabrhel, Petr Ehrlich, Tereza Uhlíková, Alžběta Kalná
          </p>
          <p>
            <strong>poradci:</strong> Martina Mašková, Libor Staňek, Martin Volný, Jakub Bartoš (MF DNES), Petr Kuthan
          </p>
          <p>
            <strong>kontakt:</strong> <a href={"mailto:redakce@vednemesicnik.cz"}>redakce@vednemesicnik.cz</a>
          </p>
        </PageContent>

        <PageFooter />
      </Page>
    </Fragment>
  )
}

export default Organization
