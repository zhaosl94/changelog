import React from 'react';
import { Badge as ChakraBadge, HStack } from '@chakra-ui/react';

interface BadgeProps {
  label: string;
  items: string[];
  colorScheme?: string;
}

export const MetaBadge = ({ label, items, colorScheme = "blue" }: BadgeProps) => {
  if (!items || items.length === 0) return null;

  return (
    <HStack spacing={2} align="center">
      <span className="text-sm font-medium text-gray-600">{label}:</span>
      <HStack spacing={1}>
        {items.map((item, index) => (
          <ChakraBadge
            key={index}
            colorScheme={colorScheme}
            variant="subtle"
            fontSize="sm"
            px={2}
            py={1}
            borderRadius="md"
          >
            {item}
          </ChakraBadge>
        ))}
      </HStack>
    </HStack>
  );
};

interface MetaBadgesProps {
  versions?: string[];
  modules?: string[];
}

export const MetaBadges = ({ versions, modules }: MetaBadgesProps) => {
  if ((!versions || versions.length === 0) && (!modules || modules.length === 0)) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-2 mt-4">
      {versions && versions.length > 0 && (
        <MetaBadge label="版本" items={versions} colorScheme="blue" />
      )}
      {modules && modules.length > 0 && (
        <MetaBadge label="模块" items={modules} colorScheme="purple" />
      )}
    </div>
  );
};
