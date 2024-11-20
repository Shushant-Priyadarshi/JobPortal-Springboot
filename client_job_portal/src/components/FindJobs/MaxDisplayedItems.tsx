import { useEffect, useState } from "react";
import {
  Checkbox,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from "@mantine/core";


const MAX_DISPLAYED_VALUES = 2;

export function MaxDisplayedItems(props: any) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<string[]>(props.options || []);
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    setData(props.options || []);
  }, [props.options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const exactOptionMatch = data.some((item) => item.toLowerCase() === search.toLowerCase());

  const handleValueSelect = (val: string) => {
    setSearch("");

    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length
        ? MAX_DISPLAYED_VALUES
        : MAX_DISPLAYED_VALUES - 1
    )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const filteredOptions = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          variant="unstyled"
          rightSection={<Combobox.Chevron />}
          leftSection={
            <div className="text-azure-radiance-700 p-1 bg-mine-shaft-950 rounded-full mr-2">
              <props.icon stroke={2.5} />
            </div>
          }
          pointer
          onClick={() => combobox.toggleDropdown()}
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > MAX_DISPLAYED_VALUES && (
                  <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className="!text-mine-shaft-200">
                {props.title}
              </Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder={`Search ${props.title.toLowerCase()}`}
        />
        <Combobox.Options>
          {filteredOptions.map((item) => (
            <Combobox.Option
              value={item}
              key={item}
              active={value.includes(item)}
            >
              <Group gap="sm">
                <Checkbox
                  size="xs"
                  color="azure-radiance.7"
                  checked={value.includes(item)}
                  onChange={() => {}}
                  aria-hidden
                  tabIndex={-1}
                  style={{ pointerEvents: "none" }}
                />
                <span>{item}</span>
              </Group>
            </Combobox.Option>
          ))}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create {search}
            </Combobox.Option>
          )}

          {filteredOptions.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
