import io

with io.open('./contents/docs/ToolBox/Toolbox.md', 'r',encoding='utf-8') as reader:
    # Note: readlines doesn't trim the line endings
    dog_breeds = reader.readlines(1)
    print(dog_breeds)