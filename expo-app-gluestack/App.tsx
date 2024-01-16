import React from "react";
import { SafeAreaView } from "react-native";
import {
  GluestackUIProvider,
  Menu,
  Box,
  Button,
  ButtonText,
  MenuItem,
  Icon,
  MenuItemLabel,
  GlobeIcon,
  SettingsIcon,
  AddIcon,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Select,
  SelectItem,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectBackdrop,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  ChevronDownIcon,
  VStack,
} from "@gluestack-ui/themed";
import { PaintBucket, PuzzleIcon } from "lucide-react-native";
import { config } from "@gluestack-ui/config";

const MenuExample = () => {
  return (
    <Menu
      placement="top"
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        {/* PuzzleIcon is imported from 'lucide-react-native' */}
        <Icon as={PuzzleIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Theme" textValue="Theme">
        {/* PaintBucket is imported from 'lucide-react-native' */}
        <Icon as={PaintBucket} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Theme</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

const ActionsheetExample = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box>
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

const SelectExample = () => {
  return (
    <Select>
      <SelectTrigger variant="outline" size="md" minWidth={200}>
        <SelectInput placeholder="Select option" />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <GluestackUIProvider config={config}>
        <VStack
          space="lg"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuExample />
          <ActionsheetExample />
          <SelectExample />
        </VStack>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
