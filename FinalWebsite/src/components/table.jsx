import { Table } from 'flowbite-react'

export default function Flowtable(props) {
  return (
    <Table>
  <Table.Head>
    <Table.HeadCell>
      Service name
    </Table.HeadCell>
    <Table.HeadCell>
      Category(photo/video)
    </Table.HeadCell>
    <Table.HeadCell>
      Price/Day
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
      Book Now 
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {props.service}
      </Table.Cell>
      <Table.Cell>
        {props.category}
      </Table.Cell>
      <Table.Cell>
        {props.price}
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
         Book Now
        </a>
      </Table.Cell>
    </Table.Row>
     </Table.Body>  
</Table>
  )
}
