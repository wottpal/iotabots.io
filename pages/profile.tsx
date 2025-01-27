/* eslint-disable max-len */
import { Web3Provider } from '@ethersproject/providers'
import {
  BaseLayout,
  Container,
  Grid,
  Section,
  SectionHeader,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import * as React from 'react'
import Connector from '../components/Connector'
import FakeIotabots from '../components/FakeIotabots'

const Profile: React.FC = (props: any) => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const context = useWeb3React<Web3Provider>()
  const { account, active } = context
  const { addresses } = props

  React.useEffect(() => {
    if (!active || !addresses?.length) {
      setBots([])
      return
    }

    // Filter bot-ids for the active address
    const iotabots = (addresses || [])
      .filter((obj) => obj?.address === account)
      .map((obj) => obj.id)
    setBots(iotabots)
  }, [account, active, addresses])

  return (
    <BaseLayout>
      <Section>
        <SectionHeader
          title='Profile'
          subtitle='Here at your profile we will show all your NFTs from different collections.'
        />
        <Container maxWidth='md'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Connector bots={bots} />
            </Grid>
            <Grid item xs={12} md={8}>
              <FakeIotabots bots={bots} />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </BaseLayout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  const URL =
    'https://raw.githubusercontent.com/iotabots/save-the-bots/main/all.txt'

  const res = await fetch(URL)
  const data = await res.text()

  const airdropAddresses: Array<any> = []

  if (!data) {
    return {
      notFound: true,
    }
  }

  const array = data.split('\n')
  // for (var i = 0; i < array.length; i++) {
  for (let index = 0; index < array.length - 1; index += 1) {
    const botData = array[index].split(':')
    const obj = {
      id: botData[0],
      address: botData[1],
    }
    airdropAddresses.push(obj)
  }

  return {
    props: { addresses: airdropAddresses },
  }
}

export default Profile
