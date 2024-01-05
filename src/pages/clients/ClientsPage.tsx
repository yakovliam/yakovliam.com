import { Flex, Heading, LinkBox, Text, LinkOverlay } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/header/Header';

function ClientsPage() {
  type ClientCardData = {
    name: string;
    whatIDid: string;
    url: string;
  };

  const data: ClientCardData[] = [
    {
      name: 'Tarigma Corporation',
      // write a long description of what you did for them
      // that includes working on multimillion dollar projects
      // that includes mission-critical electrical power utlity systems and data
      // and contracting for General Electric, Schweitzer Engineering Laboratories, AEP Energy, and other
      // large companies in the power industry
      whatIDid:
        'Developed multi-million dollar power utility systems software for large companies such as General Electric, Schweitzer Engineering Laboratories, AEP Energy, and others',
      url: 'https://www.tarigma.com/',
    },
    {
      name: 'Laundrivr',
      whatIDid:
        'Designed a full-stack mobile application and Bluetooth Runtime that allows users to schedule and pay for laundry services',
      url: 'https://www.laundrivr.com/',
    },
    {
      name: 'Skycade.net',
      whatIDid:
        'Architected and engineered a video-game software runtime and network infrastructure that supported millions of users',
      url: 'https://www.skycade.net/',
    },
    {
      name: 'JackSucksAtLife',
      whatIDid:
        "Developed unique game server engines that powered hundreds of thousands of daily users' experiences",
      url: 'https://www.youtube.com/channel/UCewMTclBJZPaNEfbf-qYMGA',
    },
    {
      name: 'ShotGunRaids',
      whatIDid:
        'Designed custom solutions that promoted clean and issue-free network operation',
      url: 'https://www.youtube.com/channel/UC_tvR3xgVNReKaxSbpCG-mQ',
    },
    {
      name: 'Spifey',
      whatIDid:
        'Designed and maintained a large network infastructure that supported thousands of daily users',
      url: 'https://www.youtube.com/channel/UCaawTX2yTGhd3xKwKfpXZTQ',
    },
    {
      name: 'TommyInnit',
      whatIDid:
        'Maintained an extensive QA pipeline and AI/ML cheat detection and punishment system',
      url: 'https://www.youtube.com/channel/UC5p_l5ZeB_wGjO_yDXwiqvw',
    },
    {
      name: 'DaniDev',
      whatIDid:
        'Developed unique and powerful internal tools for use by other employees to monitor and collect data on user activity',
      url: 'https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ',
    },
    {
      name: 'DuckyTheGamer',
      whatIDid:
        'Created internal tools for external authentication synchronization and communications software',
      url: 'https://www.youtube.com/channel/UCp5LUwfn3LY4IGCizSYpt0g',
    },
    {
      name: 'VintageBeef',
      whatIDid:
        'Design and maintained fun and creative games designed for hundreds of thousands of monthy users',

      url: 'https://www.youtube.com/channel/UCu17Sme-KE87ca9OTzP0p7g',
    },
  ];

  return (
    <>
      <Header />
      <Flex
        flexDirection="column"
        align="center"
        justify="between"
        padding={12}
        gap={30}
      >
        <Heading>Clients</Heading>
        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          gap={10}
          wrap="wrap"
        >
          {data.map((card) => (
            <LinkBox key={card.url}>
              <LinkOverlay href={card.url} isExternal>
                <Flex
                  flexDirection="column"
                  align="center"
                  textAlign="center"
                  maxW="sm"
                  boxShadow="md"
                  padding={5}
                  rounded="md"
                >
                  <Text fontWeight="bold">{card.name}</Text>
                  <Text>{card.whatIDid}</Text>
                </Flex>
              </LinkOverlay>
            </LinkBox>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default ClientsPage;
