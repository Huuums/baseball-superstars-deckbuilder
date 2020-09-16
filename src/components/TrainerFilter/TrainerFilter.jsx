import React from 'react';
import { Box, Flex, Input, Checkbox } from '@chakra-ui/core';
import useSkills from '../../hooks/useSkills';
import MultiSelect from '../MultiSelect/MultiSelect';
import UpgradeSelector from '../UpgradeSelector';
import rarities from '../../assets/rarities';
import positions from '../../assets/positions';
import types from '../../assets/types';
import bonusteams from '../../assets/bonusteams';
import useTrainerDisplaySettings from '../../hooks/useTrainerDisplaySettings';
import Select from '../Select';

const TrainerFilter = ({ setFilters, skillFilter }) => {
  const {
    setState: trainerDisplaySettingsSetState,
    searchSkillOnlyInActiveUpgrade: dontHighlightNeededUpgrades,
  } = useTrainerDisplaySettings();
  const { data: allSkills } = useSkills();

  return (
    <>
      <Flex justifyContent='spaceBetween' flexWrap='wrap' mx={-1} mb={10}>
        <Box flex='0 0 100%' maxW='calc(100% - .5rem)' mx={1} my={3}>
          <Input
            onChange={(e) => setFilters({ name: e.target.value })}
            placeholder='Search by Name'
            color='gray.300'
          />
        </Box>
        <Box flex={['1 1 40%', null, '1 1 20%']} mx={1} my={3}>
          <MultiSelect
            placeholder='Filter by Position'
            items={positions}
            onChange={(values) =>
              setFilters({ position: values?.map((row) => row.value) || [] })
            }
          />
        </Box>
        <Box flex={['1 1 40%', null, '1 1 20%']} mx={1} my={3}>
          <MultiSelect
            placeholder='Filter by Rarity'
            items={rarities}
            onChange={(values) =>
              setFilters({ rarity: values?.map((row) => row.value) || [] })
            }
          />
        </Box>
        <Box flex={['1 1 40%', null, '1 1 20%']} mx={1} my={3}>
          <MultiSelect
            placeholder='Filter by Type'
            items={types}
            onChange={(values) =>
              setFilters({ type: values?.map((row) => row.value) || [] })
            }
          />
        </Box>
        <Box flex={['1 1 40%', null, '1 1 20%']} mx={1} my={3}>
          <MultiSelect
            placeholder='Filter by Team Bonus'
            items={bonusteams}
            onChange={(values) =>
              setFilters({ bonusteams: values?.map((row) => row.value) || [] })
            }
          />
        </Box>
        <Box flex='0 0 100%' maxW='calc(100% - .5rem)' mx={1} my={3}>
          <MultiSelect
            placeholder='Filter by Skill'
            items={Object.entries(allSkills || {})
              .sort((a, b) => (a[0] > b[0] ? 1 : -1))
              .map(([key, value]) => ({
                value: key,
                label: value.name,
              }))}
            value={
              skillFilter?.map((row) => ({
                value: row,
                label: allSkills?.[row]?.name,
                withColor: !dontHighlightNeededUpgrades,
              })) || []
            }
            onChange={(values) =>
              setFilters({ skills: values?.map((row) => row.value) || [] })
            }
          />
        </Box>
        <Box flex='0 0 100%' maxW='calc(100% - .5rem)' mx={1} my={3}>
          <Select
            placeholder='Sort By'
            items={[
              { value: 'rarity', label: 'Rarity' },
              {
                value: 'skillvalue',
                label: 'Trainervalue by Skill compatibility',
              },
            ]}
            onChange={(value) =>
              trainerDisplaySettingsSetState('sortBy', {
                type: value.value,
                order: 'desc',
              })
            }
          />
        </Box>
        {skillFilter?.length > 0 && (
          <>
            <Box flex='0 0 100%' mx={1} my={3}>
              <Checkbox
                color='gray.300'
                onChange={(e) =>
                  trainerDisplaySettingsSetState(
                    'skillSearchTypeAnd',
                    e.target.checked
                  )
                }
              >
                Only show trainers if they have ALL selected skills
              </Checkbox>
            </Box>
            <Box flex='0 0 100%' mx={1} my={3}>
              <Checkbox
                color='gray.300'
                onChange={(e) =>
                  trainerDisplaySettingsSetState(
                    'searchSkillOnlyInActiveUpgrade',
                    e.target.checked
                  )
                }
              >
                Only show trainers if they have the selected Skill on their
                current upgrade level
              </Checkbox>
            </Box>
          </>
        )}
      </Flex>
    </>
  );
};

export default TrainerFilter;
