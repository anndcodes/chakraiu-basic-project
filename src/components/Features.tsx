import { ElementType } from "react";
import { HStack, Stack, Icon, Text, StackProps, Box } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";

interface FeatureProps extends StackProps {
  icon: ElementType;
  // children: any;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <Stack px="12" spacing="6" direction={["column", "column", "row"]}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No montly subscriptions Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
